const activitiesService = () => {
    const getAllActivities = (month: number, year: number, currentMonthYear: boolean) => {
        console.log("ok im here")
        console.log("month: ", month)
        console.log("year:", year)
        console.log("month and year current? ", currentMonthYear)
    }
    
    function getDateRange(date: Date, type: string) {
        if (!(date instanceof Date)) {
            throw new Error("O parâmetro deve ser um objeto Date.");
        }
    
        const daysOfWeek = [
            "Sunday", "Monday", "Tuesday", "Wednesday", 
            "Thursday", "Friday", "Saturday"
        ];
        const monthsOfYear = [
            "January", "February", "March", "April", 
            "May", "June", "July", "August", 
            "September", "October", "November", "December"
        ];
    
        // Retorna os 7 dias da semana
        if (type === "week") {
            return daysOfWeek;
        }
    
        // Retorna as semanas do mês
        if (type === "month") {
            const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
            const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            const totalDays = endOfMonth.getDate();
            const weeks = [];
    
            for (let i = 1; i <= Math.ceil(totalDays / 7); i++) {
                weeks.push(`Week ${i}`);
            }
    
            return weeks;
        }
    
        // Retorna os meses do ano
        if (type === "year") {
            return monthsOfYear;
        }
    
        // Retorna os anos desde o início até o atual
        if (type === "all") {
            const currentYear = date.getFullYear();
            const years = [];
    
            for (let year = 2022; year <= currentYear; year++) {
                years.push(`${year}`);
            }
    
            return years;
        }
    
        throw new Error("Tipo inválido. Use 'week', 'month', 'year' ou 'all'.");
    }

    return {
        getAllActivities,
        getDateRange
    }
}

export default activitiesService;