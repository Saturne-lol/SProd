import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
        const user = await checkToken(event)
        if (!user) return new Response("Unauthorized", {status: 401})
        const mode = getQuery(event).mode as "daily" | "monthly" | "yearly"

        let views = await prisma.view.findMany({
            where: {
                profile_id: user.id
            },
            orderBy: {
                date: "desc"
            }
        })

        let result: { labels: string[], data: number[] } = {labels: [], data: []};
        if (mode === "daily") {
            // Filtrer les vues pour obtenir celles des 30 derniers jours
            const filteredViews = views.filter(view => view.date.getTime() > Date.now() - 1000 * 60 * 60 * 24 * 30);

            // Grouper les vues par jour
            const groupedByDay = filteredViews.reduce((acc: { [key: string]: number }, view) => {
                const day = view.date.getDate().toString().padStart(2, '0'); // Ajoute un zéro devant le jour
                const monthIndex = view.date.getMonth(); // Index du mois (0-11)
                const month = monthNames[monthIndex]; // Nom du mois en lettres
                const date = `${day} ${month}`; // Format "jour mois"
                if (!acc[date]) acc[date] = 0;
                acc[date]++;
                return acc;
            }, {});

            // Trouver tous les jours du mois courant
            const today = new Date();
            const year = today.getFullYear();
            const monthIndex = today.getMonth();
            const daysInMonth = new Date(year, monthIndex + 1, 0).getDate(); // Nombre de jours dans le mois courant

            // Ajouter les jours manquants avec une valeur de 0
            for (let day = 1; day <= daysInMonth; day++) {
                const formattedDay = day.toString().padStart(2, '0');
                const date = `${formattedDay} ${monthNames[monthIndex]}`;
                if (!groupedByDay[date]) {
                    groupedByDay[date] = 0;
                }
            }

            // Préparer les données pour Chart.js
            const sortedDates = Array.from({length: daysInMonth}, (_, i) => {
                const day = (i + 1).toString().padStart(2, '0');
                return `${day} ${monthNames[monthIndex]}`;
            });

            result = {
                labels: sortedDates,
                data: sortedDates.map(date => groupedByDay[date] || 0)
            };
        }
        if (mode === "monthly") {
            // Filtrer les vues pour obtenir celles des 12 derniers mois
            const filteredViews = views.filter(view => view.date.getTime() > Date.now() - 1000 * 60 * 60 * 24 * 30 * 12);

            // Grouper les vues par mois
            const groupedByMonth = filteredViews.reduce((acc: { [key: string]: number }, view) => {
                const monthIndex = view.date.getMonth(); // Index du mois (0-11)
                const month = monthNames[monthIndex]; // Nom du mois en lettres
                if (!acc[month]) acc[month] = 0;
                acc[month]++;
                return acc;
            }, {});

            // Trouver tous les mois de l'année courante
            const today = new Date();
            const year = today.getFullYear();

            // Ajouter les mois manquants avec une valeur de 0
            for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
                const month = monthNames[monthIndex];
                if (!groupedByMonth[month]) {
                    groupedByMonth[month] = 0;
                }
            }

            // Préparer les données pour Chart.js
            const sortedMonths = monthNames;

            result = {
                labels: sortedMonths,
                data: sortedMonths.map(month => groupedByMonth[month] || 0)
            };
        }
        if (mode === "yearly") {
            const filteredViews = views.filter(view => view.date.getTime() > Date.now() - 1000 * 60 * 60 * 24 * 365 * 5);

            const groupedByYear = filteredViews.reduce((acc: { [key: string]: number }, view) => {
                const year = view.date.getFullYear().toString();
                if (!acc[year]) acc[year] = 0;
                acc[year]++;
                return acc;
            }, {});

            const today = new Date();
            const currentYear = today.getFullYear();

            for (let year = currentYear - 4; year <= currentYear; year++) {
                if (!groupedByYear[year.toString()]) {
                    groupedByYear[year.toString()] = 0;
                }
            }

            const sortedYears = Array.from({length: 5}, (_, i) => (currentYear - 4 + i).toString());

            result = {
                labels: sortedYears,
                data: sortedYears.map(year => groupedByYear[year] || 0)
            };
        }

        return {
            vues: result
        }
    }
)