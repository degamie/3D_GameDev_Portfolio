class Score extends Flag{
    Score(score){
        this.score=score;
    }
    setScore(score){
        return Score.findAllByScore(Score);
    }
    getScore(score){
        return score;
    }
    // Score(score){
    //     this.score=score;
    // }
    onScore(score){
        if(score===0)return ;
        while(score!=0){
            if(score>0){
                flag++;
            }else score=0;
        } 
   return 0;
}
}