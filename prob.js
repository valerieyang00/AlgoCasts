function numberOfAlerts(precedingMinutes, alertThreshold, numCalls) {
    if (precedingMinutes < 3) {
            return 0
        }
        let alertCount = 0
        for (let i=0; i < numCalls.length; i++) {
            let totalCalls = 0
            if (numCalls.length - i >= precedingMinutes) {
                for (let j=i; j< i + precedingMinutes; j++) {
                    totalCalls += numCalls[j]
                }
                console.log(totalCalls)
                let avgCalls = totalCalls / precedingMinutes
                if (avgCalls > alertThreshold) {
                        alertCount++
                }
            }
        }
        return alertCount
    
    }
numberOfAlerts(3, 4, [10,11,10,13])