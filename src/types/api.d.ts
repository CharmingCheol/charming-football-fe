interface SearchSuggestion {
    id: string;
    name: string;
    type: "team" | "player" | "league";
}

interface NextMatchData {
    fixture: {
        date: Date;
        stadium: string;
        city: string;
        status: {
            name: "Scheduled" | "InPlay";
            elapsed: number;
        };
    };
    home: {
        id: number;
        name: string;
        logo: string;
    };
    away: {
        id: number;
        name: string;
        logo: string;
    };
    goals: {
        home: number;
        away: number;
    };
    league: {
        name: string;
        round: string;
    };
}
