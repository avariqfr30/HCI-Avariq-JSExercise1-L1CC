const canGiveBlood = (donor, recipient) => {
    let landsteiner_phenotype = true;
    let rhesus_phenotype = true;
        if (recipient.includes("AB")) {
        landsteiner_phenotype = true;
         } else if (donor.includes("O")) {
            landsteiner_phenotype = true;
  }     else if (donor[0] === recipient[0]) {
    landsteiner_phenotype = true;
  } else {
    landsteiner_phenotype = false;
  }

  if (donor.includes("+") && recipient.includes("-")) {
    rhesus_phenotype = false;
  } else {
    rhesus_phenotype = true;
  }

  return landsteiner_phenotype && rhesus_phenotype;
}


console.log(canGiveBlood("AB+", "A-"));