import React, { useState, useEffect } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),

    },
    table: {
        width: "100%",
    },
    tableHeader: {
        fontSize: "1.6rem!important",
        fontWeight: 600,
        width: 160
    },
    tableData: {
        fontSize: "1.5rem!important",
        width: 160
    },
    tableButton: {
        margin: 5,
    },
    tableRow: {
        width: "100%"
    }
}));

const InstructorListTable = (props) => {
    const lists = props.tableDataList
    const classes = useStyles()
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.tableRow}>
                        <TableCell className={classes.tableHeader}>
                            SL
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            First Name
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            Last Name
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            Email
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            Photo
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        lists.map((list, index) => (
                            <TableRow key={list.id} hover>
                                <TableCell className={classes.tableData}>
                                    {index = index + 1}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    {list.user.first_name}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    {list.user.last_name}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    {list.user.email}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    <img style={{ width: "100px", height: "100px" }} src={list.photo} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const InstructorList = () => {
    const [instructorDetails, setinstructorDetails] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/teacher/")
            .then(res => {
                if (mounted) {
                    setinstructorDetails(res.data)
                }
            })
        return () => {
            mounted = false
        }
    }, [setinstructorDetails])

    return (
        <section className="section">
            <div className="container">
                <InstructorListTable tableDataList={instructorDetails} />
            </div>
        </section>
    )
}

export default InstructorList;