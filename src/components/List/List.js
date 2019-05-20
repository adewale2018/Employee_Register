import React, { Component } from 'react';
import Head from '../Register/Header';
import './List.css';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			EmployeesData: JSON.parse(localStorage.getItem('EmployeesData'))
		};
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete = (id) => {
		alert('ARE YOU SURE YOU WANT TO DELETE THIS?');
		const datas = this.state.EmployeesData;
		datas.forEach((data) => {
			if (data.id === id) {
				datas.splice(id, 1);
			}
		});
		localStorage.setItem('EmployeesData', JSON.stringify(datas));
		this.setState({ EmployeesData: datas });
	};

	renderData() {
		const oldData = JSON.parse(localStorage.getItem('EmployeesData'));
		const newData = oldData.map((data) => {
			return (
				<tr key={data.id} id={data.id}>
					<td>{data.name}</td>
					<td>{data.age}</td>
					<td>{data.dob}</td>
					<td>{data.phoneNum}</td>
					<td>{data.cpf}</td>
					<td>{data.rg}</td>
					<td>{data.adrs}</td>
					<td>{data.num}</td>
					<td>{data.city}</td>
					<td>{data.sta}</td>
					<td>
						<div className="List-buttons">
							<button>
								<i class="fas fa-pen" />
							</button>
							<button onClick={() => this.handleDelete(data.id)}>
								<i class="fas fa-trash" />
							</button>
						</div>
					</td>
				</tr>
			);
		});
		return (
			<div className="List">
				<table>
					<thead>
						<tr>
							<th>NAME</th>
							<th>AGE</th>
							<th>D.O.B</th>
							<th>CONTACT</th>
							<th>CPF</th>
							<th>RG</th>
							<th>ADDRESS</th>
							<th>NUM</th>
							<th>CITY</th>
							<th>STATE</th>
							<th>
								EDIT/<span className="del">DEL</span>
							</th>
						</tr>
					</thead>
					<tbody>{newData}</tbody>
				</table>
			</div>
		);
	}
	render() {
		return (
			<div className="List">
				<Head title="Quick-tech's Employees" />
				{this.renderData()}
			</div>
		);
	}
}

export default List;
