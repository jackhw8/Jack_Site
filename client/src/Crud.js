import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import Form from './components/Form';
import Message from './components/Message';
import EmployeeAPI from './EmployeeAPI';

class Crud extends React.Component {
    constructor(props) {
        // let us use this key word within our constructor
        super(props);

        // Initialzie state
        this.state = {
            // Array of employees to keep track of all employees
            employees : [],
            // keep track of forms, two stages(edit, add)
            isEditForm : false,
            // employee object
            employee : {
                firstName : "",
                lastName : "",
                salary : "",
                job : ""
            },
            message : ""
        };

        // bindings, these are functions that pass to child component
        // bind() : bind 함수는 바인드하는 함수에서 사용하는 this의 대상을 지정해주는 역할을 합니다.
        
        // JavaScript this : 객체지향 언어에서의 일반적인 this 의 의미(현재 객체를 지칭)와는 달리 자바스크립트의 this 는 실행시의 context 를 말하죠.

        // we delete employee
        this.deleteHandler = this.deleteHandler.bind(this);
        // add employe
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        // manipulate employee object
        this.handleChange = this.handleChange.bind(this);
        // set our form to edit(isEditForm to true)
        this.showEditForm = this.showEditForm.bind(this);
    }

    /*  
        componentDidMount    
        여러분의 컴포넌트가 화면에 나타나게 됐을 때 호출됩니다. 
        여기선 주로 D3, masonry 처럼 DOM 을 사용해야하는 외부 라이브러리 연동을 하거나, 
        해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 ajax 요청을 하거나, 
        DOM 의 속성을 읽거나 직접 변경하는 작업을 진행합니다.
    */
    componentDidMount() {
        EmployeeAPI.getEmployees().then(data => {
            this.setState({employees : data.response})
        });
    }

    // Reset the form
    resetForm() {
        this.setState({
            employee: {
                firstName : "",
                lastName : "",
                salary : "",
                job : ""
            }
        });
    }

    handleChange(e){
        this.setState({
            employee : {
                ...this.state.employee,
                [e.target.name] : e.target.value
            }
        });
    }


    showEditForm(employee) {
        this.setState({
            isEditForm : true, employee : employee
        });
    }


    async deleteHandler(id) {
        const deleteData = await EmployeeAPI.deleteEmployee(id);
        const message = deleteData.message;
        // msgError is true / false
        if(message.msgError) {
            this.setState({message});
        }
        else {
            const data = await EmployeeAPI.getEmployees();
            this.setState({message, employees : data.response});
        }
    }

    async updateHandler(e) {
        e.preventDefault();
        const updateData = await EmployeeAPI.updateEmployee(this.state.employee);
        const message = updateData.message;
        // msgError is true / false
        if(message.msgError) {
            this.setState({message});
        }
        else {
            const data = await EmployeeAPI.getEmployees();
            this.setState({message, employees : data.response});
        }
        // reset the form to previous state
        this.setState({isEditForm: false});
        this.resetForm();
    }


    async addHandler(e) {
        e.preventDefault();
        const postData = await EmployeeAPI.createEmployee(this.state.employee);
        const message = postData.message;
        // msgError is true / false
        if(message.msgError) {
            this.setState({message});
        }
        else {
            const data = await EmployeeAPI.getEmployees();
            this.setState({message, employees : data.response});
        }
        // reset the form to previous state
        this.resetForm();
    }


    renderEmployeeTable() {
        // this means we have employees to display
        if(this.state.employees.length > 0) {
            return(
                <EmployeeTable employees={this.state.employees}
                                deleteHandler={this.deleteHandler}
                                showEditForm={this.showEditForm}/>
            );
        }
        // whenver it returns null, it's not gonna be rendered
        return null;
    }

    renderForm(){
        return(
            <Form isEditForm={this.state.isEditForm}
                    employee={this.state.employee}
                    handleChange={this.handleChange}
                    // onsubmit function, check state, if state is not equal to isEditForm then this.addHandler else this.updateHandler
                    handler={!this.state.isEditForm ? this.addHandler : this.updateHandler}/>
        );
    }

    renderMessage(){
        // if message is empty
        if(this.state.message === "") {
            return null;
        }
        return(
            <Message message={this.state.message}/>
        )
    }

    // main render function for our app component
    render() {
        return (
            <>
            <header className="bg-light border-top border-bottom">
            <div className="text-center">
              <p></p>
              <h1 style={{'fontWeight':'700'}}>Projects</h1>
              <p style={{'fontSize': '25px', 'color': 'grey', 'fontFamily': 'open sans,sans-serif'}}>Check out my projects!<br/>
              </p>
             </div>
           </header>


            <div className="row">
                <div className="col"></div>
                <div className="col-10">
                    {this.renderEmployeeTable()}
                    {this.renderForm()}
                    {this.renderMessage()}
                </div>
                <div className="col"></div>
            </div>
            </>
        )
    }
}

export default Crud;