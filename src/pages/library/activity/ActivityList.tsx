import { FC, useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import GenericCard from "../../../components/genericCard/GenericCard";
import { marks } from "../LibraryContent";
import { Spinner } from "flowbite-react";
import { IActivity } from "../../../interfaces/iactivity.interface";
import { getActivities } from "../../../services/activity.service";

const ActivityList: FC = () => {
    const { enqueueSnackbar } = useSnackbar();

    /** LOCAL STATE */
    const [loading, setLoading] = useState(false);

    const [rows, setRows] = useState<IActivity[]>([]);
    useEffect(() => {
      loadData();
    }, []);

    const loadData = () => {
        setLoading(true);
        getActivities(20, 0)
        .then((response) => {
            setLoading(false);
            setRows(response.data.results);
        }).catch((error) => {
            if (error.response?.data?.errors) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (const [_key, value] of Object.entries(error.response.data.errors)) {
                if (Array.isArray(value)) {
                value.map(error => enqueueSnackbar(`${error}`, { variant: 'error' }));
                } else {
                enqueueSnackbar(`${value}`, { variant: 'error' });
                }
            }
            } else if (error.response) {
            if (error.response.status === 400) {
                for (const [key, value] of Object.entries(error.response.data)) {
                if (Array.isArray(value)) {
                    value.map(error => enqueueSnackbar(`${key} : ${error}`, { variant: 'error' }));
                } else {
                    enqueueSnackbar(`${key} : ${value}`, { variant: 'error' });
                }
                }
            } else if (error.response.status === 401 || error.response.status === 403) {
                enqueueSnackbar('Problème de permission', { variant: 'error' });
            } else if (error.response.status === 500) {
                enqueueSnackbar('Erreur du serveur', { variant: 'error' });
            }
            } else if (error.request) {
            console.log('error.request : ', error.request);
            } else {
            console.log('Error', error.message);
            }
        });
    };

    return <>
        <div className="flex flex-col gap-3">
            {rows.map((filter, filter_index) => (
                <GenericCard
                    key={`accommodation-`+filter_index}
                    title = {filter.name}
                    image="https://img.freepik.com/photos-gratuite/maison-design-villa-moderne-salon-decloisonne-chambre-privee-aile-grande-terrasse-intimite_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=sph"
                    description= {filter.description}
                    place= {filter.location && filter.location.province}
                    mark={marks.activity}
                />
            ))}
        </div>
        {loading && <div className="big-loader"><Spinner/></div>}
    </>
}
export default ActivityList