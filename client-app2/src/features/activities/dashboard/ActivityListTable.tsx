import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';


export default observer(function ActivityListTable() {
    const { activityStore } = useStore();
    const { activitiesByDate } = activityStore;



    return (
        <>
            <table className="min-w-full ">
                    <thead className="bg-gray-100 text-gray-500">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            >
                                Category
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            >
                                Description
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                        {activitiesByDate.map((activity) => (
                            <tr key={activity.id} className="border-b border-gray-200 ">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{activity.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link to={`/activities/${activity.id}`} className="text-indigo-600 hover:text-indigo-900">
                                        View
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


        </>

    )
})
