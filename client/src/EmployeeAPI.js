/* This file is for contain http reqeust */

/*
fetch API : fetch 라는 함수는 첫번째 인자로 전달 된 데이터(파일이 됬든, endpoint(경로) 가 됬든)를 서버에게 요청하는 함수
앞에 요청한 서버의 응답이 끝나면 then(callbackme) callbackme라는 함수를 실행
*/

// export an object that has functions that make our http request for us
export default {
    // Return every single employee within our employee collection
    getEmployees : () => {
        // Return a promise
        return fetch('/crud/employee')
                .then(res => res.json())
                .then(data => data);
    },
    deleteEmployee : (_id) => {
        return fetch(`/crud/employee/${_id}`,
                    {method : 'delete'})
                    .then(res => res.json())
                    .then(data => data);
    },
    updateEmployee : (employee) => {
        return fetch(`/crud/employee/${employee._id}`,
                    {method: 'put',
                     body: JSON.stringify(employee),
                     headers : {
                        "Content-Type" : "application/json"
                     }}).then(res => res.json())
                        .then(data => data);
    },
    createEmployee : (employee) => {
        return fetch('/crud/employee',
                    {method: 'post',
                     body: JSON.stringify(employee),
                     headers : {
                        "Content-Type" : "application/json"
                     }}).then(res => res.json())
                        .then(data => data);
    }
}