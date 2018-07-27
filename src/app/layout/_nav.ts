export const navItems = [
  {
    name: 'Quality Management',
    url: '#',
    icon: 'fa fa-line-chart',
    children: [
      {
        name: 'Quality Central',
        url: 'http://healthinsight:8082/curis/hleft.jsp#!/',
        icon: 'fa fa-line-chart'
      },
      {
        name: 'Quality Program',
        url: 'http://healthinsight:8082/curis/hleft.jsp#!/',
        icon: 'fa fa-line-chart',
        children: [
          {
            name: 'MIPS',
            url: 'http://healthinsight:8082/curis/MIPS.html',
            icon: 'fa fa-line-chart'
          },
          {
            name: 'HEDIS',
            url: 'http://healthinsight:8082/curis/Hedis.html',
            icon: 'fa fa-line-chart'
          },
          {
            name: 'OHA',
            url: '#',
            icon: 'fa fa-line-chart'
          },
          {
            name: 'CMS STAR',
            url: 'http://healthinsight:8082/curis/CMS_Stars.html',
            icon: 'fa fa-line-chart'
          },
        ]
      },
      {
        name: 'Quality Measures',
        url: 'http://healthinsight:8082/curis/hleft.jsp#!/Measure_Library',
        icon: 'fa fa-line-chart'
      },
      {
        name: 'Configuration',
        url: '#',
        icon: 'fa fa-sliders',
        children: [
          {
            name: 'Measure Creator',
            url: 'http://healthinsight:8082/curis/hleft.jsp#!/Final_Creator',
            icon: 'fa fa-sliders'
          },
          {
            name: 'Program Creator',
            url: '/programcreator',
            icon: 'fa fa-sliders'
          },
          {
            name: 'Configurator',
            url: 'http://healthinsight:8082/curis/hleft.jsp#!/Measure_Configurator',
            icon: 'fa fa-sliders'
          },
          {
            name: 'My Measures',
            url: 'http://healthinsight:8082/curis/hleft.jsp#!/Measure_Worklist',
            icon: 'fa fa-sliders'
          },
        ]
      },
    ]
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Gaps in Care',
    url: '#',
    icon: 'fa fa-handshake-o',
    children: [
      {
        name: 'Care Summary',
        url: '#',
        icon: 'fa fa-handshake-o'
      },
      {
        name: 'Gaps List',
        url: '/member-care-gap-list',
        icon: 'fa fa-handshake-o'
      },
      {
        name: 'Close Patient Gap',
        url: '#',
        icon: 'fa fa-handshake-o'
      },
    ]
  },
  {
    name: 'PHM',
    url: '#',
    icon: 'fa fa-user-o',
    children: [
      {
        name: 'PHM SUMMARY',
        url: '#',
        icon: 'fa fa-user-o'
      },
      {
        name: 'Risk Assessment',
        url: '#',
        icon: 'fa fa-user-o'
      },
      {
        name: 'Measure Analysis',
        url: '#',
        icon: 'fa fa-user-o'
      },
      {
        name: 'Membership Analysis',
        url: '#',
        icon: 'fa fa-user-o'
      },
      {
        name: 'Geo Analysis',
        url: '#',
        icon: 'fa fa-user-o'
      },
      {
        name: 'Utilitzation Analysis',
        url: '#',
        icon: 'fa fa-user-o'
      },
      {
        name: 'Financial Analysis',
        url: '#',
        icon: 'fa fa-user-o'
      },
      {
        name: 'Provider Analysis',
        url: '#',
        icon: 'fa fa-user-o'
      },
    ]
  }
];
