import {Content, Header, Table} from "rsuite";
import React, {useEffect, useState} from "react";
import axios from "axios";

const {Column, HeaderCell, Cell} = Table;

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(function () {
        if (users.length === 0) {
            axios.get('http://localhost:9100/user/').then(data => {
                console.log(data);
                setUsers(data.data);
            });
        }
    });

    return (
        <>
            <Header>
                <h2>Users</h2>
            </Header>
            <Content>
                <Table
                    height={400}
                    data={users}
                    onRowClick={rowData => {
                        console.log(rowData);
                    }}
                >
                    <Column width={60} align="center" fixed>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id"/>
                    </Column>

                    <Column width={150}>
                        <HeaderCell>First Name</HeaderCell>
                        <Cell dataKey="username"/>
                    </Column>

                    <Column width={300}>
                        <HeaderCell>Email</HeaderCell>
                        <Cell dataKey="email"/>
                    </Column>

                    <Column width={300}>
                        <HeaderCell>Created at</HeaderCell>
                        <Cell dataKey="created_at"/>
                    </Column>

                    <Column width={80} fixed="right">
                        <HeaderCell>...</HeaderCell>
                        <Cell>
                            {rowData => (
                                <span>
                                  <a onClick={() => alert(`id:${rowData.id}`)}> Edit </a>
                                </span>
                            )}
                        </Cell>
                    </Column>
                </Table>
            </Content>
        </>
    );
}

export default Users;