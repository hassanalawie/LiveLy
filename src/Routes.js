import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from "./components/SignUp";
import KeyWordsBasketball from "./components/KeyWordsBasketball";
import KeyWordsFootball from "./components/KeyWordsFootball";
import KeyWordsTennis from "./components/KeyWordsTennis";
import KeyWordsBaseball from "./components/KeyWordsBaseball";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Questions from "./components/Questions";

function Routes() {
  return (
    <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={SignIn} />
        <Route path="/keywordsbasketball" component={KeyWordsBasketball} />
        <Route path="/keywordsfootball" component={KeyWordsFootball} />
        <Route path="/keywordstennis" component={KeyWordsTennis} />
        <Route path="/keywordsbaseball" component={KeyWordsBaseball} />
        <Route path = "/dashboard" component={Dashboard}/>
        <Route path = "/questions" component={Questions}/>
    </Switch>
  );
}

export default Routes;