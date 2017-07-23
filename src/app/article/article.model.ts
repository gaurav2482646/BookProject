/**
 * Created by gaura on 7/22/2017.
 */
export class Article{
  title:string;
  link:string;
  vote:number;
  constructor(title:string, link:string,vote?:number){
    this.title = title;
    this.link = link;
    this.vote = vote || 0 ;
  }

  voteUp(){
    this.vote+=1;
    return false;
  }
  voteDown(){
    this.vote -=1;
    return false;
  }
domain():string{
    try{
      const domainAndPath: string = this.link.split("//")[1];
      return domainAndPath.split("/")[0];
    }catch(err){
      return null;
    }
}
  }

