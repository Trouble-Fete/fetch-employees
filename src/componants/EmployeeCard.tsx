interface Employee {
	name: {
		first: string;
		last: string;
	};
	email: string;
	picture: {
		medium: string;
	};
}

interface EmployeeCardProps {
	employee: Employee;
	fetchEmployee: () => void;
}

function EmployeeCard({ employee, fetchEmployee }: EmployeeCardProps) {
	return (
		<div className="DisplayEmployee">
			<div>
				<img
					className="pic"
					src={employee.picture.medium}
					alt={`${employee.name.first} ${employee.name.last}`}
				/>
				<h2>
					{employee.name.first} {employee.name.last}
				</h2>
				<p>{employee.email}</p>
				<button className="button" type="button" onClick={fetchEmployee}>
					Get New Employee
				</button>
			</div>
		</div>
	);
}

export default EmployeeCard;
