// Material UI Table
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
/* import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'; */

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

const LiveSessionListTable = (props) => {
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
                            Title
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            Description
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            Price
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            Date
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            Time
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            URL
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            Photo
                        </TableCell>
                        {/* <TableCell className={classes.tableHeader}>
                            Action
                        </TableCell> */}
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
                                    {list.title}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    {list.description}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    {list.price}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    {list.session_date}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    {list.timelength}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    {list.conference_url}
                                </TableCell>
                                <TableCell className={classes.tableData}>
                                    <img style={{ width: "100px", height: "100px" }} src={list.photo} alt={list.title} />
                                </TableCell>
                                {/* <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}

                                    >
                                        <EditIcon />
                                    </Button>
                                </TableCell> */}
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LiveSessionListTable
