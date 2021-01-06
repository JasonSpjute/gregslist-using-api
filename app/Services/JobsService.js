import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js"

class JobsService{
    async getJobs(){
        let res = await api.get("jobs")
        console.log(res)
        ProxyState.jobs = res.data.map(l => new Job(l))
        console.log(ProxyState.jobs)
    }
}

export const jobsService = new JobsService()