import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { PollingPageComponent } from './polling-page/polling-page.component';
import { VoteComponent } from './../common/vote/vote.component';
import { CardComponent } from './../common/card/card.component';
import { MatchComponent } from './../common/match/match.component';
import { HandleDataService } from '../services/handle-data.service';
import { AddMatchComponent } from './../common/add-match/add-match.component';
import { ShowVotesComponent } from './../common/show-votes/show-votes.component';
import { ListMatchesComponent } from './../common/list-matches/list-matches.component';


const appRoutes: Routes = [
  {path: 'polling', component: PollingPageComponent},
  {path: 'graph', component: GraphComponent},
  {path: 'addMatch', component: AddMatchComponent},
  {path: 'listMatches', component: ListMatchesComponent},
  {path: 'vote/:team1/:team2/:date/:time', component: VoteComponent},
  {path: 'showvote/:date/:time/:team1/:team2', component: ShowVotesComponent},
  {path: '', redirectTo: '/polling', pathMatch: 'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    PollingPageComponent,
    VoteComponent,
    CardComponent,
    MatchComponent,
    AddMatchComponent,
    ShowVotesComponent,
    ListMatchesComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [
    HandleDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
