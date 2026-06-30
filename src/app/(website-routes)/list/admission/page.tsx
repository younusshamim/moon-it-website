"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import courseList from "@/data/course-list";
import { convertToBanglaNumber } from "@/lib/utils";
import type { AdmissionModel } from "@/models/admission.model";
import type { BaseResponseModel } from "@/models/base";
import { getAdmissions } from "@/services/admission.action";

const Admission = () => {
  const [admissions, setAdmissions] = useState<AdmissionModel[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("all");
  const [filteredAdmissions, setFilteredAdmissions] = useState<
    AdmissionModel[]
  >([]);

  // Function to get course name from courseId
  const getCourseName = (courseId: number) => {
    const course = courseList.find((course) => course.id === courseId);
    return course ? course.name : "Unknown Course";
  };

  useEffect(() => {
    const fetchAdmissions = async () => {
      const response =
        (await getAdmissions()) as BaseResponseModel<AdmissionModel>;
      if (response?.status === "success") {
        setAdmissions((response.data as AdmissionModel[]) || []);
      }
    };
    fetchAdmissions();
  }, []);

  useEffect(() => {
    if (selectedCourse === "all") {
      setFilteredAdmissions(admissions);
    } else {
      setFilteredAdmissions(
        admissions.filter(
          (admission) => admission.courseId.toString() === selectedCourse,
        ),
      );
    }
  }, [selectedCourse, admissions]);

  const formatDateTime = (date: Date | undefined) => {
    if (!date) return "-";
    return new Date(date).toLocaleString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  if (!admissions.length) {
    return (
      <Container className="pt-10 pb-20">
        <p className="text-center text-gray-500">
          কোন অ্যাডমিশন রেকর্ড খুঁজে পাওয়া যায়নি
        </p>
      </Container>
    );
  }

  return (
    <Container className="pt-10 pb-20">
      <h2 className="text-4xl text-foreground-dark font-extrabold text-center mb-8">
        অ্যাডমিশন রেকর্ড তালিকা
      </h2>

      <div className="mb-6">
        <Select value={selectedCourse} onValueChange={setSelectedCourse}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="কোর্স ফিল্টার" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সব কোর্স</SelectItem>
            {courseList.map((course) => (
              <SelectItem key={course.id} value={course.id.toString()}>
                {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>নাম</TableHead>
              <TableHead>ফোন নম্বর</TableHead>
              <TableHead>কোর্স</TableHead>
              <TableHead>কোর্স ফি</TableHead>
              <TableHead>ঠিকানা</TableHead>
              <TableHead>অ্যাডমিশন সময়</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAdmissions.map((admission, index) => (
              <TableRow key={index}>
                <TableCell className="font-semibold">
                  {admission.name}
                </TableCell>
                <TableCell>{admission.contactNo}</TableCell>
                <TableCell>
                  {getCourseName(Number(admission.courseId))}
                </TableCell>
                <TableCell>
                  ৳ {convertToBanglaNumber(Number(admission.courseFee) || 0)}
                </TableCell>
                <TableCell>{admission.address || "-"}</TableCell>
                <TableCell>{formatDateTime(admission.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default Admission;
