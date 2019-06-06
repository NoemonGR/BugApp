// tslint:disable-next-line: class-name
export interface bug {
    title: string;
    description: string;
    priority: number;
    reporter: string;
    createdAt: Date;
    status: string;
    id: string;
    comments?: [{
      id: string;
      reporter: string;
      description: string;
    }];

  }
