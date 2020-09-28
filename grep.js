let member = [];

member.push({name: "hong", point:80});
member.push({name: "hwang", point:100});
member.push({name: "park", point:95});
member.push({name: "choi", point:50});
member.push({name: "ryu", point:30});

// forEach() 역할 반복문
$(member).each((a,b) => {
    console.log(a,b); // a가 인덱스 b가 오브젝트
})

// grep == filter
let grepMem =  $.grep(member, (a,b) => {
    console.log(a,b); //a가 오브젝트 b가 인덱스
    return (a.point > 50 ? a : null);
})

console.log(grepMem);

// mep 맵핑하기
let sum = $(grepMem).map((a,b) => { 
    console.log(a,b); // a가 인덱스 b가 오브젝트
    return b.point;
}).get();
console.log("sum: " + sum);

let ssum=0;
for(let i=0; i<sum.length; i++) {
    ssum += sum[i]
}
console.log("전체point값: " + ssum);

