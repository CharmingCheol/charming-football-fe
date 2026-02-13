interface NextMatchFixture {
    fixture: {
        id: number;
        date: string;
        venue: {
            name: string;
            city: string;
        };
        status: {
            short: string;
            elapsed: number | null;
        };
    };
    league: {
        id: number;
        name: string;
    };
    teams: {
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
    };
    goals: {
        home: number | null;
        away: number | null;
    };
}

interface RecentMatchFixture {
    fixture: {
        id: number;
        date: string;
        venue: {
            name: string;
            city: string;
        };
    };
    teams: {
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
    };
    goals: {
        home: number;
        away: number;
    };
}
