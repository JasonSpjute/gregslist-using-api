export default class Job{
    constructor({company, jobTitle, hours, rate, description, id}){
        debugger
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description
        this.id = id
    }

    get Template(){
        return /*html*/`
        <div class="col-md-4 col-6 mt-3">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${this.jobTitle}</h4>
                <h6 class="card-subtitle">${this.company}</h6>
                <p class="card-text">Rate = ${this.rate}</p>
                <p class="card-text">Hours: ${this.hours}</p>
                <p class="card-text">${this.description}</p>
                <div class="text-right">
                    <button type="button" class="btn btn-success" >Apply</button>
                    <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
                </div>
            </div>
        </div>
        </div>
            `
    
    }
    
}