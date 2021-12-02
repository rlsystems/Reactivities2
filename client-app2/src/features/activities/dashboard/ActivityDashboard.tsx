import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import {
    ArrowNarrowLeftIcon,
    CheckIcon,
    HomeIcon,
    PaperClipIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    ThumbUpIcon,
    UserIcon,
} from '@heroicons/react/solid'
import ActivityList from './ActivityList';
import ActivityListTable from './ActivityListTable';
import { Switch } from '@headlessui/react'
import ActivityHeading from './ActivityHeading';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;


    //SAMPLE DATA
    const eventTypes = {
        applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
        advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-blue-500' },
        completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
    }
    const timeline = [
        {
            id: 1,
            type: eventTypes.applied,
            content: 'Applied to',
            target: 'Front End Developer',
            date: 'Sep 20',
            datetime: '2020-09-20',
        },
        {
            id: 2,
            type: eventTypes.advanced,
            content: 'Advanced to phone screening by',
            target: 'Bethany Blake',
            date: 'Sep 22',
            datetime: '2020-09-22',
        },
        {
            id: 3,
            type: eventTypes.completed,
            content: 'Completed phone screening with',
            target: 'Martha Gardner',
            date: 'Sep 28',
            datetime: '2020-09-28',
        },
        {
            id: 4,
            type: eventTypes.advanced,
            content: 'Advanced to interview by',
            target: 'Bethany Blake',
            date: 'Sep 30',
            datetime: '2020-09-30',
        },
        {
            id: 5,
            type: eventTypes.completed,
            content: 'Completed interview with',
            target: 'Katherine Snyder',
            date: 'Oct 4',
            datetime: '2020-10-04',
        },
    ]

    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])


    if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />

    return (
        <div className="flex flex-col">
            <ActivityHeading/>
            <ActivityListTable />

        </div>
    )
})