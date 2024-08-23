function solution(id, db) {
    var answer = '';
    var i = db.map((a,i)=>db[i][0]==id[0]?1:0);
    var p = db.map((a,i)=>db[i][1]==id[1]?1:0);
    answer = i.map((a,i)=>p[i]==1&&a==1?"login":p[i]!=1&&a==1?"wrong pw":"fail")
    
    return answer.includes("login")?"login":answer.includes("wrong pw")?"wrong pw":"fail"
}