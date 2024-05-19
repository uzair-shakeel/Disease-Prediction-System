import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage() {
  return (
    <section className="bg-[#eafeeb] py-8 min-h-screen px-[8%] text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold py-3">Frequently Asked Questions</h1>
        <p className="pb-8 w-[50%]">
          Answers to Your Questions: Find clarity on common queries about our
          disease prediction service, data privacy, accuracy, and more.
        </p>
      </div>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            What is the Disease Prediction System?
          </AccordionSummary>
          <AccordionDetails>
            The Disease Prediction System is an online platform designed to help
            users assess their health risks and predict potential diseases based
            on symptoms provided.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How does the Disease Prediction System work?
          </AccordionSummary>
          <AccordionDetails>
            Our system utilizes advanced algorithms and machine learning
            techniques to analyze the symptoms entered by users and generate
            predictions about possible diseases or health conditions.{" "}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Is the Disease Prediction System accurate?
          </AccordionSummary>
          <AccordionDetails>
            While we strive for accuracy, it's important to note that our system
            provides predictions based on the information provided by users and
            the algorithms it employs. It's always advisable to consult a
            healthcare professional for a definitive diagnosis and medical
            advice.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            What kind of symptoms can I input into the Disease Prediction
            System?
          </AccordionSummary>
          <AccordionDetails>
            You can input a wide range of symptoms into our system, including
            common ailments like headaches, fever, fatigue, as well as more
            specific symptoms related to various diseases or conditions.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Is my personal information safe when using the Disease Prediction
            System?
          </AccordionSummary>
          <AccordionDetails>
            Yes, we take the privacy and security of your personal information
            seriously. Any data entered into the system is kept confidential and
            is only used for the purpose of generating predictions. Please refer
            to our privacy policy for more details.{" "}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Can the Disease Prediction System replace a visit to the doctor?
          </AccordionSummary>
          <AccordionDetails>
            No, the Disease Prediction System is not a substitute for
            professional medical advice, diagnosis, or treatment. It is intended
            to provide users with preliminary information and raise awareness
            about potential health risks. Always consult a qualified healthcare
            provider for personalized medical guidance.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            How should I interpret the results from the Disease Prediction
            System?
          </AccordionSummary>
          <AccordionDetails>
            The results provided by our system are for informational purposes
            only and should not be considered a definitive diagnosis. If you
            receive concerning results, we recommend seeking further evaluation
            from a healthcare professional for proper diagnosis and treatment.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Can I use the Disease Prediction System for emergency situations?
          </AccordionSummary>
          <AccordionDetails>
            No, the Disease Prediction System is not designed for use in
            emergency situations. If you are experiencing a medical emergency,
            please seek immediate medical assistance by contacting emergency
            services or visiting the nearest hospital.
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
