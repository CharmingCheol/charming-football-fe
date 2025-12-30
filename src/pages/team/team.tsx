import { useParams } from "react-router-dom";

const TeamPage = () => {
    const { id } = useParams();

    return (
        <main>
            <div>TeamPage</div>
            <span>team id: {id}</span>
        </main>
    );
};

export default TeamPage;
