import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ActiveSectionService {

    private activeSectionSubject = new BehaviorSubject<string | null>(null);
    activeSection$: Observable<string | null> = this.activeSectionSubject.asObservable();

    setActiveSection(section: string | null) {
        this.activeSectionSubject.next(section);
    }

    // Detecta si el usuario hace click en la nav bar | Detect if the user clicks on nav bar

    private userScrollSubject = new BehaviorSubject<boolean>(false);
    userScroll$: Observable<boolean> = this.userScrollSubject.asObservable();

    setUserScroll(value: boolean){
        this.userScrollSubject.next(value);
    }

    // constructor() { }
    
}