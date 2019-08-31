// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
    id
    name
    description
    startDate
    endDate
    state
    budget
    promoter
    location {
      id
      name
      city
    }
  }
}
`;
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
    id
    name
    description
    startDate
    endDate
    state
    budget
    promoter
    location {
      id
      name
      city
    }
  }
}
`;
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
    id
    name
    description
    startDate
    endDate
    state
    budget
    promoter
    location {
      id
      name
      city
    }
  }
}
`;
export const onCreatePromoter = `subscription OnCreatePromoter {
  onCreatePromoter {
    id
    name
    email
    phoneNumber
  }
}
`;
export const onUpdatePromoter = `subscription OnUpdatePromoter {
  onUpdatePromoter {
    id
    name
    email
    phoneNumber
  }
}
`;
export const onDeletePromoter = `subscription OnDeletePromoter {
  onDeletePromoter {
    id
    name
    email
    phoneNumber
  }
}
`;
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
    id
    name
    city
  }
}
`;
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
    id
    name
    city
  }
}
`;
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
    id
    name
    city
  }
}
`;
