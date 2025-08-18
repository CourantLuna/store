import { Pipe, PipeTransform } from '@angular/core';
import { add, formatDistance } from 'date-fns'; // Assuming you have a utility function for time ago logic	

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    return  formatDistance(new Date(value), new Date(), 
    { addSuffix: true, includeSeconds: false });  
    // return tiempoHaceMeses(value); // Example transformation: returns ISO string
    // Here you can implement a real "time ago" logic

  }
  

}
function tiempoHaceMeses(fechaISO: Date) {
  const d = new Date(fechaISO);
  const now = new Date();

  const future = d > now;
  const a = future ? now : d;
  const b = future ? d : now;

  let years = b.getFullYear() - a.getFullYear();
  let months = b.getMonth() - a.getMonth();
  let days = b.getDate() - a.getDate();

  // Ajustar meses/días negativos
  if (days < 0) {
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let value: number;
  let unit: string;

  if (years >= 1) {
    value = years;
    unit = value === 1 ? "año" : "años";
  } else if (months >= 1) {
    value = months;
    unit = value === 1 ? "mes" : "meses";
  } else {
    const diffMs = b.getTime() - a.getTime();
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    if (totalDays >= 1) {
      value = totalDays;
      unit = value === 1 ? "día" : "días";
    } else if (totalHours >= 1) {
      value = totalHours;
      unit = value === 1 ? "hora" : "horas";
    } else if (totalMinutes >= 1) {
      value = totalMinutes;
      unit = value === 1 ? "minuto" : "minutos";
    } else {
      value = totalSeconds;
      unit = value === 1 ? "segundo" : "segundos";
    }
  }

  return future ? `en ${value} ${unit}` : `hace ${value} ${unit}`;
}
