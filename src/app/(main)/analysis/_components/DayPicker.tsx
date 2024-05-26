"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { subDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDayStore } from "@/lib/useStoreProvider";
import { SelectSingleEventHandler } from "react-day-picker";

export default function DayPicker() {
  const { day, count, setDay, setCount } = useDayStore((state) => state);
  console.log(day, count);
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !day && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {day ? (
              format(day, "yyyy년 MM월 dd일")
            ) : (
              <span>날짜를 고르세요</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="flex w-[240px] flex-col space-y-2 p-2"
        >
          <Select
            onValueChange={(count) => (
              setDay(subDays(new Date(), parseInt(count))), setCount(count)
            )}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">오늘</SelectItem>
              <SelectItem value="1">어제</SelectItem>
            </SelectContent>
          </Select>
          {/* <div className="rounded-md border">
            <Calendar
              mode="single"
              selected={day}
              onSelect={setDay as SelectSingleEventHandler}
            />
          </div> */}
        </PopoverContent>
      </Popover>
    </>
  );
}
