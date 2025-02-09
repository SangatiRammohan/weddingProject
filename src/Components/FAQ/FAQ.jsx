import React from "react";
import './FAQ.css'
import { Accordion, AccordionBody, AccordionItem } from "react-bootstrap";
export default function FAQ() {
    let data = [
        {
            name: "question 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, officia!"
        },
        {
            name: "question 2",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, officia!"
        },
        {
            name: "question 3",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, officia!"
        }
    ]
    return (
        <>
            <div className="faq">
                <h3>FAQ</h3>
                <div className="question">
                    <Accordion defaultActiveKey="0">
                        {data.map((item, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index} className="item">
                                <Accordion.Header className="questionHeader">
                                    <h3>{item.name}</h3>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="questionAnswer">{item.description}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>

        </>
    )
}