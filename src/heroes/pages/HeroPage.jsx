import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";
import { useMemo } from "react";


export const HeroPage = () => {

    const { id } = useParams();

    const hero = useMemo(() =>  getHeroeById(id), [id]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to={'/marvel'} />;
    }

    return (
        <div className="row mt-5">
            <div className="col-4 animate__heartBeat">
                <img
                    src={`/heroes/${ id }.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3"><b>Characters</b> </h5>
                <p className="mx-3">{hero.characters}</p>
                <button
                    onClick={onNavigateBack}
                    className="btn btn-outline-primary">
                    Regresar
                </button>
            </div>
        </div>
    );
}