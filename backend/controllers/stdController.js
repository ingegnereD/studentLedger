const express = require('express')
const asyncHandler = require("express-async-handler")
const Student = require('../model/stdModel')
const { createCustomError } = require("../error/error")

const getAllStudent = asyncHandler(async(req, res, next) => {
    const student = await Student.find({})
    if (!student) {
        return next(createCustomError(`Error fetching student`, 500))
    }
    res.status(200).json({ student, nbHit: student.length })
})

const createNewStudent = asyncHandler(async(req, res, next) => {
    const studentInfo = req.body
    const student = await Student.create(studentInfo)
    if (!student) {
        return next(createCustomError(`Error in creating student`, 500))
    }
    res.status(200).json({ student })
})

const getOneStudent = asyncHandler(async(req, res, next) => {
    const { id: stdID } = req.params
    const student = await Student.findOne({ _id: stdID })
    if (!student) {
        return next(createCustomError(`No student with id ${stdID} found, check params`, 404))
    }
    res.status(200).json({ student })
})

const updateStudent = asyncHandler(async(req, res, next) => {
    const { id: stdID } = req.params
    const stdUD = req.body
    const student = await Student.findOneAndUpdate({ _id: stdID }, stdUD, { new: true, runValidators: true })
    if (!student) {
        return next(createCustomError(`No student with id ${stdID} found, check params`, 404))
    }
    res.status(200).json({ student })
})

const deleteStudent = asyncHandler(async(req, res, next) => {
    const { id: stdID } = req.params
    const stdDel = await Student.findOneAndDelete({ _id: stdID })
    if (!stdDel) {
        return next(createCustomError(`No student with id ${stdID} found, check params`, 404))
    }
    res.status(200).json({ stdDel })
})

module.exports = { getAllStudent, getOneStudent, createNewStudent, updateStudent, deleteStudent }