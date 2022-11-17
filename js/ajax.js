const obj = {
	name: 'Lee',
	age: 20,
	alive: true,
	hobby: ['traveling', 'tennis']
}

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);
console.log(typeof json, json);

