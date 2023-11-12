import React, { useState, useEffect, useMemo } from 'react';
import ListMUI from '@mui/material/List';
import ListItemMUI from '@mui/material/ListItem';
import IconButtonMUI from '@mui/material/IconButton';
import DeleteIconMUI from '@mui/icons-material/Delete';

import service from '../../services/students';

function StudentList({newStudentItem}) {
    const [list, setList] = useState([]);
    const [sortedList, setSortedList] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await service.get();
            setList(response);
        })();
    }, []);

    useEffect(() => {
        setSortedList(list.sort((a,b) => b.qualified - a.qualified));
    }, [list]);

    useEffect(() => {
        setList(actual => ([...actual, newStudentItem]));
    }, [newStudentItem]);

    const handleDeleteStudent = async (id) => {
        try {
            await service.delete(id);
            setList(actual => actual.filter(item => item.id !== id));
        } catch(err) {
            console.log(err);
        }
    };

    return sortedList.length ? (
        <ListMUI>
            {sortedList.map((item, index) => (
                <ListItemMUI key={index} style={{color: item.qualified ? 'green' : 'red'}}>
                    {item.name}, mark: {item.mark}
                    <IconButtonMUI onClick={() => handleDeleteStudent(item.id)}>
                        <DeleteIconMUI/>
                    </IconButtonMUI>
                </ListItemMUI>
            ))}
        </ListMUI>
    ) : null;
}

export default StudentList;