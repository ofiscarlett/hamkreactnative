import React from 'react';
import mysql from 'mysql';
//const express = require('express');

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: 'a0918810955a',
    database: 'boot_database',
});

var tableName = "boots";

export const init=()=>
{
    const promise = new Promise((resolve, reject)=>{
        const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (
            id_number serial PRIMARY KEY,
            type_boot VARCHAR(255) NOT NULL
            size_boot INT NOT NULL,
             
        )`;
        pool.query(sql,(error, result)=>{
               if(error){
                        reject(error);
                }else{
                    console.log("Table created")
                    resolve();
                }
            });
    });
    return promise;
};

export const addBoot = (type, size) => {
    const promise = new Promise((resolve, reject) => {
        const sql =  `INSERT INTO ${tableName}( type_boot, size_boot) VALUES(?,?)`;
        pool.query(sql, [type, size], (error, result) => {
            if (error) {
                reject(error);
            }else {
                console.log("Boot added");
                resolve();
            }
        });
    });
    return promise;
};

export const readAllBoots = () => {
    const promise = new Promise((resolve, reject)=> { 
        const sql = `SELECT * FROM ${tableName}`;
        pool.query(sql, (error, result) => {
            if(error){
                reject(error);
                }else{
                    const bootList =result;
                    console.log("Boots read");
                    resolve();
                }
            });
    });
    return promise;
};

export const deleteBootFrDb =(id)=>{
    const promise = new Promise((resolve, reject)=>{
        const sql = 'DELETE FROM ${tableName} WHERE id_number=?';
        pool.query(sql, [id], (error, result)=>{
            if(error){
                reject(error);
            }else{
                console.log("Boot deleted");
                resolve();
            }
        });
    });
    return promise;
};


export const updateBootFrDb = (id, type, size) =>{
    const promise = new Promise((resolve, reject)=>{
        const sql = `UPDATE ${tableName} SET type_boot=?, size_boot=? WHERE id_number=?`;
        db.query(sql, [id, type, size], (error, result)=>{
            if(error){
                reject(error);
            }else{
                console.log("Boot updated")
                resolve();

            }
        });
    });
    return promise;
}


export default pool;

