import React, { useEffect, useState, Fragment } from 'react';
import { getUserActivitiesData } from '../../services/api'; // Ensure you have this API function to fetch activities data
import { Link } from 'react-router-dom';
import Transaction from './Transaction'; // Assuming you have a Transaction component for displaying individual transactions
import useToken from '../../hooks/useToken';

export default function AllTransactions({ userId }) {
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const { getUser, getToken } = useToken();

    useEffect(() => {
        const userData = getUser();
        const token = getToken();

        if (!userData || !token) {
            alert('Please log in');
            window.location.href = '/login';
            return;
        }

        setUser(userData);

        const fetchActivities = async () => {
            try {
                const data = await getUserActivitiesData(user.user_id);
                setActivities(data);
            } catch (error) {
                console.error("Error fetching activities:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchActivities();
    }, []);

    return (
        <section className="p-4 flex flex-col gap-4 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <header className="flex gap-2 items-center mb-4">
                <Link to="/home">
                    <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">←</button>
                </Link>
                <h1 className="font-bold text-lg">ประวัติการทำรายการ</h1>
            </header>
            {isLoading ? (
                <p className="text-center text-lg text-gray-600">กำลังโหลด...</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {activities.slice().reverse().map((activity, index) => (
                        <Fragment key={index}>
                            <Transaction
                                placeName={activity.smartbin.name}
                                date={activity.timestamp}
                                point={activity.point}
                                details={[{ material: activity.material, point: activity.point }]} // Wrap details in an array
                            />
                        </Fragment>
                    ))}
                </div>
            )}
        </section>
    );
}
