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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import courseList from "@/data/course-list";
import type { BaseResponseModel } from "@/models/base";
import type { SeminarModel } from "@/models/seminar.model";
import { getSeminars } from "@/services/seminar.action";

const Seminar = () => {
  const [seminars, setSeminars] = useState<SeminarModel[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("all");
  const [filteredSeminars, setFilteredSeminars] = useState<SeminarModel[]>([]);

  // Function to get course name from courseId
  const getCourseName = (courseId: number) => {
    const course = courseList.find((course) => course.id === courseId);
    return course ? course.name : "Unknown Course";
  };

  useEffect(() => {
    const fetchSeminars = async () => {
      const response = (await getSeminars()) as BaseResponseModel<SeminarModel>;
      if (response?.status === "success") {
        setSeminars((response.data as SeminarModel[]) || []);
      }
    };
    fetchSeminars();
  }, []);

  useEffect(() => {
    if (selectedCourse === "all") {
      setFilteredSeminars(seminars);
    } else {
      setFilteredSeminars(
        seminars.filter(
          (seminar) => seminar.courseId.toString() === selectedCourse,
        ),
      );
    }
  }, [selectedCourse, seminars]);

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

  if (!seminars.length) {
    return (
      <Container className="pt-10 pb-20">
        <p className="text-center text-gray-500">
          কোন সেমিনার রেজিস্ট্রেশন খুঁজে পাওয়া যায়নি
        </p>
      </Container>
    );
  }

  return (
    <Container className="pt-10 pb-20">
      <h2 className="text-4xl text-foreground-dark font-extrabold text-center mb-8">
        সেমিনার রেজিস্ট্রেশন তালিকা
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
              <TableHead>অংশগ্রহণের সম্ভাবনা</TableHead>
              <TableHead>ঠিকানা</TableHead>
              <TableHead>রেজিস্ট্রেশন সময়</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSeminars.map((seminar, index) => (
              <TableRow key={index}>
                <TableCell className="font-semibold">{seminar.name}</TableCell>
                <TableCell>{seminar.contactNo}</TableCell>
                <TableCell>{getCourseName(Number(seminar.courseId))}</TableCell>
                <TableCell>{seminar.attendPosibility}</TableCell>
                <TableCell>{seminar.address || "-"}</TableCell>
                <TableCell>{formatDateTime(seminar.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default Seminar;
