         const data = [
            { name: "Ahmad Ali", email: "ahmad@example.com", department: "IT", city: "Karachi", salary: "50000" },
            { name: "Zubain Ali", email: "Zubain Ali@example.com", department: "HR", city: "Lahore", salary: "45000" },
            { name: "Ali Hassan", email: "ali@example.com", department: "Sales", city: "Islamabad", salary: "55000" },
            { name: "Aisha Muhammad", email: "aisha@example.com", department: "Marketing", city: "Karachi", salary: "48000" },
            { name: "Arfat", email: "Arfat@example.com", department: "IT", city: "Lahore", salary: "52000" },
            { name: "Zainab Ali", email: "zainab@example.com", department: "HR", city: "Karachi", salary: "46000" },
            { name: "Khalid Ahmad", email: "khalid@example.com", department: "Sales", city: "Lahore", salary: "58000" },
            { name: "Noor Fatima", email: "noor@example.com", department: "Marketing", city: "Islamabad", salary: "50000" }
        ];

         function displayTable(filteredData) {
            const tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = "";

            if (filteredData.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="5" class="no-results">No results found</td></tr>';
                document.getElementById("resultCount").textContent = "Total Results: 0";
                return;
            }

            filteredData.forEach(row => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${row.name}</td>
                    <td>${row.email}</td>
                    <td>${row.department}</td>
                    <td>${row.city}</td>
                    <td>${row.salary}</td>
                `;
                tableBody.appendChild(tr);
            });

            document.getElementById("resultCount").textContent = `Total Results: ${filteredData.length}`;
        }

        function filterTable() {
            const searchTerm = document.getElementById("searchInput").value.toLowerCase();
            const departmentFilter = document.getElementById("departmentFilter").value;

            const filtered = data.filter(row => {
                const matchSearch = Object.values(row).some(val => 
                    val.toLowerCase().includes(searchTerm)
                );
                const matchDept = !departmentFilter || row.department === departmentFilter;
                return matchSearch && matchDept;
            });

            displayTable(filtered);
        }

        function resetFilters() {
            document.getElementById("searchInput").value = "";
            document.getElementById("departmentFilter").value = "";
            displayTable(data);
        }

        document.getElementById("searchInput").addEventListener("keyup", filterTable);
        document.getElementById("departmentFilter").addEventListener("change", filterTable);

        displayTable(data);