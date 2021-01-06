import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";

function _drawJobs(){
    let jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(job => {
        template += job.Template
    })
    document.getElementById('jobs').innerHTML = template
}

export default class JobsController{
    constructor(){
        ProxyState.on("jobs", _drawJobs)
        _drawJobs()
        this.getJobs()
    }

    getJobs(){
        try{
            jobsService.getJobs()
        }
        catch(error){
            console.error(error)
        }
    }
}

