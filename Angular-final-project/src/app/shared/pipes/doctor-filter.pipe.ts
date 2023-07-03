import { Pipe, PipeTransform } from '@angular/core';
import { doctor } from 'src/app/Models/Models';

@Pipe({
  name: 'doctorFilter'
})
export class DoctorFilterPipe implements PipeTransform {
  ldoctors : doctor[]
  transform(doctors:doctor[], Speciality: string , selectedname : string ): doctor[] {
    
    if (Speciality=="All")
    this.ldoctors = doctors;
    else
    this.ldoctors = doctors.filter(x=>x.specialty == Speciality);


     // filter items array, items which match and return true will be
        // kept, false will be filtered out
        if (selectedname != "")
        this.ldoctors= this.ldoctors.filter(x => x.name.toLowerCase().indexOf(selectedname.toLowerCase()) != -1);


    return this.ldoctors;

 
  }

}
