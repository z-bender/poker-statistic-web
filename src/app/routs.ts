import {BankrollComponent, PlayersComponent} from './index';

export const routs = [
  {path: 'bankroll', component: BankrollComponent},
  {path: 'players', component: PlayersComponent},
  {path: '', redirectTo: 'bankroll', pathMatch: 'full'}
];
