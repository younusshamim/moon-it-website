"use client";

import { type ReactNode, useState } from "react";
import FormSubmittedModal from "@/components/modals/form-submitted-modal";
import PrimaryButton from "@/components/primary-button";
import AdmissionFormModal from "../../course/admission-form-modal/admission-form-modal";

type PropsTypes = {
  /** Legacy admission course id (bridges to the admission action/dropdown). */
  initialCourseId: string;
  /** Pre-selected variation id, when the course has variations. */
  initialVariationId?: string;
  children: ReactNode;
  size?: "sm" | "lg";
  variant?: "outline";
  className?: string;
};

const EnrollButton = ({
  initialCourseId,
  initialVariationId,
  children,
  size,
  variant,
  className,
}: PropsTypes) => {
  const [formModal, setFormModal] = useState(false);
  const [submittedModal, setSubmittedModal] = useState(false);

  return (
    <>
      <AdmissionFormModal
        isOpen={formModal}
        setIsOpen={setFormModal}
        setSubmittedModal={setSubmittedModal}
        initialCourseId={initialCourseId}
        initialVariationId={initialVariationId}
      />
      <FormSubmittedModal
        isOpen={submittedModal}
        setIsOpen={setSubmittedModal}
      />

      <PrimaryButton
        size={size}
        variant={variant}
        className={className}
        onClick={() => setFormModal(true)}
      >
        {children}
      </PrimaryButton>
    </>
  );
};

export default EnrollButton;
