import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CategoryApi {
    private caterories = ['all', 'electronics', 'home', 'office', 'kitchen'];

    getCategories() {
        return this.caterories;
    }
}