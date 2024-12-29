const isReportIncreasing = (report:Array<number>):boolean =>{
    for (let i = 0; i < report.length; i++) {
      if (report[i] > report[i + 1]) {
        return false;
      }
    }
    return true;
  }

  const purgeReportIncreasingWithDampener = (report:Array<number>):Array<number> =>{
    for (let i = 0; i < report.length; i++) {
      const previous = i > 0 ? report[i - 1] : null;
      const cur = report[i];
      const next = report[i + 1] ?? null;
      console.log('prev', previous)
      console.log('cur', cur)
      console.log('next', next)
      
      if (cur >= next) {
        console.log('cur >= next')
        if(previous && next && previous < next && isChangeBetweenLevelsInThreshold(previous,next)){
          console.log('in!')
          report.splice(i,1)
          console.log('uu',report)
          return report
        }
      }
      
      if(){
        if( previous && previous < cur && !isChangeBetweenLevelsInThreshold(previous,cur)){
          report.splice(i, 1)
          return report
        }
      }

    }
    return report;
  }

  const purgeReportDecreasingWithDampener = (report:Array<number>):Array<number> =>{
    for (let i = 0; i < report.length; i++) {
      const previous = i > 0 ? report[i - 1] : null;
      const cur = report[i];
      const next = report[i + 1] ?? null;
      if (cur <= next) {
        if(previous && next && previous > next && isChangeBetweenLevelsInThreshold(previous,next)){
          report.splice(i,1)
          return report
        }
      }
    }
    return report;
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
      if(!isChangeBetweenLevelsInThreshold(report[i],report[i + 1])){
        return false
      }
    }
    return true;
  }

  const isChangeBetweenLevelsInThreshold = (lvl1: number, lvl2:number):boolean=>{
      const step = Math.abs(lvl1-lvl2)
      // console.log('step',step)
      if (step < 1 || step > 3  ) {
        return false;
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

export const isReportSafeWithDampener = (report:Array<number>):boolean =>{
  const increases = report[0] < report[report.length -1];
  console.log('rep', report)
  const initialLength =report.length

  if(increases){
    const purged = purgeReportIncreasingWithDampener(report)
    if(purged.length !== initialLength){
      console.log('purg inc', purged)
    }
    return isReportSafe(purged)
  }else{
    const purged = purgeReportDecreasingWithDampener(report)
    if(purged.length !== initialLength){
      console.log('purg dec', purged)
    }return isReportSafe(purged)
  }
}