const isReportIncreasing = (report:Array<number>):boolean =>{
    for (let i = 0; i < report.length; i++) {
      if (report[i] > report[i + 1]) {
        return false;
      }
    }
    return true;
  }
const isReportDecreasing = (report:Array<number>):boolean =>{
    for (let i = 0; i < report.length; i++) {
      if (report[i] < report[i + 1]) {
        return false;
      }  
    }
    return true;
  }

const changeInThreshold = (report:Array<number>):boolean=>{
    for (let i = 0; i < report.length-1; i++) {
      const step = Math.abs(report[i]-report[i + 1])
      // console.log('step',step)
      if (step < 1 || step > 3  ) {
        return false;
      }  
    }
    return true;
  }
  
export const isReportSafe = (report:Array<number>):boolean =>{
    // console.log('report',report)
    // console.log('increasing', isReportIncreasing(report))
    // console.log('decreasing', isReportDecreasing(report))
    
    if(!isReportIncreasing(report) && !isReportDecreasing(report)){
      return false;
    }
    // console.log('changes ok?', changeInThreshold(report))
    
    if(!changeInThreshold(report)){
      return false
    }
    
    return true;
  }