function solution(record) {
    var answer = [];
    var userMap = {};

    record.forEach(entry => {
        const [action, uid, name] = entry.split(' ');

        if (action !== 'Leave') {
            userMap[uid] = name;
        }
    });

    record.forEach(entry => {
        const [action, uid] = entry.split(' ');

        if (action === 'Enter') {
            answer.push(`${userMap[uid]}님이 들어왔습니다.`);
        } else if (action === 'Leave') {
            answer.push(`${userMap[uid]}님이 나갔습니다.`);
        }
    });

    return answer;
}
