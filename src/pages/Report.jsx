import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Report = () => {
  const { locationName } = useParams();
  const [reportData, setReportData] = useState([]);
  const [climateData, setClimateData] = useState(null);
  const [reportType, setReportType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReport = async (type) => {
    setIsLoading(true);
    setReportType(type);
    try {
      const response = await fetch(
        `http://localhost:5001/api1/location-readings/${type}/${locationName}`
      );
      const data = await response.json();
      
      // Transform the data for the chart
      const formattedData = data.currentData.map((reading, index) => ({
        day: index + 1,
        morning: reading.morning_reading,
        afternoon: reading.afternoon_reading,
        evening: reading.evening_reading
      }));
      
      setReportData(formattedData);
      setClimateData(data);
    } catch (err) {
      console.error('Error fetching report:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonStyle = (isActive) => ({
    padding: '0.5rem 1rem',
    backgroundColor: isActive ? '#3b82f6' : 'white',
    color: isActive ? 'white' : '#3b82f6',
    border: '1px solid #3b82f6',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '0.5rem'
  });

  const getChangeColor = (change) => {
    if (change > 0) return '#dc2626'; // red for warming
    if (change < 0) return '#2563eb'; // blue for cooling
    return '#6b7280'; // gray for no change
  };

  return (
    <div style={{ padding: '1.5rem', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Temperature Report for {locationName}
        </h2>
        <div style={{ marginBottom: '2rem' }}>
          <button 
            onClick={() => fetchReport('weekly')}
            style={buttonStyle(reportType === 'weekly')}
            disabled={isLoading}
          >
            Weekly Report
          </button>
          <button 
            onClick={() => fetchReport('monthly')}
            style={buttonStyle(reportType === 'monthly')}
            disabled={isLoading}
          >
            Monthly Report
          </button>
        </div>
        
        {isLoading ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className="loading-spinner" style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #3b82f6',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
        ) : (
          <>
            {reportData.length > 0 && (
              <>
                <div style={{ width: '100%', overflowX: 'auto', marginBottom: '2rem' }}>
                  <LineChart
                    width={800}
                    height={400}
                    data={reportData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="day" 
                      label={{ 
                        value: reportType === 'weekly' ? 'Day of Week' : 'Day of Month',
                        position: 'bottom',
                        offset: 0
                      }}
                    />
                    <YAxis 
                      label={{ 
                        value: 'Temperature', 
                        angle: -90, 
                        position: 'insideLeft' 
                      }} 
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="morning" stroke="#8884d8" name="Morning" dot={true} />
                    <Line type="monotone" dataKey="afternoon" stroke="#82ca9d" name="Afternoon" dot={true} />
                    <Line type="monotone" dataKey="evening" stroke="#ffc658" name="Evening" dot={true} />
                  </LineChart>
                </div>

                {climateData && (
                  <div style={{
                    backgroundColor: '#f8fafc',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginTop: '2rem'
                  }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                      Climate Analysis Report
                    </h3>
                    
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      {['morning', 'afternoon', 'evening'].map(time => (
                        <div key={time} style={{
                          padding: '1rem',
                          backgroundColor: 'white',
                          borderRadius: '6px',
                          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                        }}>
                          <h4 style={{ 
                            textTransform: 'capitalize', 
                            marginBottom: '0.5rem',
                            fontWeight: '500'
                          }}>
                            {time} Temperatures
                          </h4>
                          <div style={{ marginBottom: '0.25rem' }}>
                            Previous: {climateData.averages.previous[time]}°C
                          </div>
                          <div style={{ marginBottom: '0.25rem' }}>
                            Current: {climateData.averages.current[time]}°C
                          </div>
                          <div style={{
                            color: getChangeColor(climateData.analysis.changes[time]),
                            fontWeight: '500'
                          }}>
                            Change: {climateData.analysis.changes[time] > 0 ? '+' : ''}
                            {climateData.analysis.changes[time]}°C
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      backgroundColor: '#fff',
                      padding: '1rem',
                      borderRadius: '6px',
                      borderLeft: `4px solid ${
                        climateData.analysis.analysis.severity === 'significant' ? '#dc2626' :
                        climateData.analysis.analysis.severity === 'moderate' ? '#f59e0b' :
                        '#3b82f6'
                      }`
                    }}>
                      <h4 style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Analysis</h4>
                      <p>{climateData.analysis.analysis.details}</p>
                    </div>
                  </div>
                )}
              </>
            )}
            
            {!reportData.length && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                Select a report type to view the temperature data
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Report;