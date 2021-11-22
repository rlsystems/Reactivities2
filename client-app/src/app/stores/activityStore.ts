import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";
import { v4 as uuid } from 'uuid';

export default class ActivityStore {

    activityRegistry = new Map<string, Activity>();

    selectedActivity: Activity | undefined = undefined;
    editMode: boolean = false;
    loading: boolean = false;
    loadingInitial: boolean = true;

    constructor() {
        makeAutoObservable(this) //Mobx will do the above code by inference
    }


    //computed Property
    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) =>
            Date.parse(a.date) - Date.parse(b.date));
    }

    loadActivities = async () => {

        try {
            const activities = await agent.Activities.list(); //get list of activities
            activities.forEach(activity => { //update the state
                activity.date = activity.date.split('T')[0];
                //this.activities.push(activity) //in mobx its correct to directly mutate objects
                this.activityRegistry.set(activity.id, activity);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectActivity = (id: string) => {
        //this.selectedActivity = this.activities.find(a => a.id === id)
        this.selectedActivity = this.activityRegistry.get(id);

    }
    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectActivity(id) : this.cancelSelectedActivity();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }


    createActivity = async (activity: Activity) => {
        this.loading = true;
        activity.id = uuid();

        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                //this.activities.push(activity);
                this.activityRegistry.set(activity.id, activity); //add an activity to the Map Object

                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }



    updateActivity = async (activity: Activity) => {
        this.loading = true;


        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                //this.activities = this.activities.filter(a => a.id !== activity.id); //creates a new array excluding the selected one
                //this.activities.push(activity) //add the updated activity in
                this.activityRegistry.set(activity.id, activity); //Map Object set will update if ID same
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteActivity = async (id: string) => {
        this.loading = true;


        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                //this.activities = this.activities.filter(a => a.id !== id); //creates a new array excluding the selected one
                this.activityRegistry.delete(id);
                //this.selectedActivity = undefined; //this works too
                if (this.selectedActivity?.id === id) this.cancelSelectedActivity();
                //this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

}