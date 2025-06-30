#!/bin/bash

CSV_FILE="powerfulweb.csv"
HTML_FILE="powerfulweb.html"
CSS_FILE="style.css"


if [ ! -f "$CSV_FILE" ]; then
    echo "CSV file '$CSV_FILE' not found."
    exit 1
fi


get_description() {
    local url="$1"
    local domain=$(echo "$url" | sed 's~^https\?://~~; s~/.*~~')  # Extract domain
    local cache_file="desc_cache.txt"

    # Check if description already cached
    if [ -f "$cache_file" ]; then
        local cached=$(grep "^$domain|" "$cache_file" | cut -d'|' -f2-)
        if [ -n "$cached" ]; then
            echo "$cached"
            return
        fi
    fi

    # Fetch from API if not in cache
    local desc=$(curl -s "https://api.microlink.io/?url=https://$domain" | jq -r '.data.description // empty')

    # Save to cache if description is found
    if [ -n "$desc" ]; then
        echo "$domain|$desc" >> "$cache_file"
        echo "$desc"
    else
        echo "No description"
    fi
}

echo "Starting HTML generation..."
echo "Reading websites from: $CSV_FILE"

cat <<EOF > "$HTML_FILE"





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>powerfulweb-eth</title>
    <link rel="stylesheet" href="$CSS_FILE">
</head>
<body>


    <div class="main-container">

        <main class="article-content">
            <div class="article-header">
                <h1 class="article-title">Powerful Websites</h1>
                <div class="article-subtitle">powerful websites collected from @setupsai @themrtechking on ig.</div>
            </div>

            <div class="article-body">
                <div class="table-responsive">
                    <table class="wiki-table table-full-width">
                        <tr>
                            <th>URL</th>
                            <th>Description</th>
                        </tr>
EOF

while IFS=";" read -r rawurl desc rowclass; do
    # Trim spaces
    rawurl=$(echo "$rawurl" | xargs)
    desc=$(echo "$desc" | xargs)
    rowclass=$(echo "$rowclass" | xargs)

    # Skip empty or comment lines
    [ -z "$rawurl" ] || [[ "$rawurl" =~ ^# ]] && continue

    # Prepend https:// if missing
    if [[ ! "$rawurl" =~ ^https?:// ]]; then
        url="https://$rawurl"
    else
        url="$rawurl"
    fi

    # Get description if missing
    if [ -z "$desc" ]; then
        echo "No description provided for $url. Fetching from cache or API..."
        desc=$(get_description "$url")
    fi

    # Generate row
    if [ -n "$rowclass" ]; then
        echo "Adding table row for $url with class '$rowclass'"
        echo "                        <tr class=\"$rowclass\">" >> "$HTML_FILE"
    else
        echo "Adding table row for $url with no special class"
        echo "                        <tr>" >> "$HTML_FILE"
    fi
    echo "                            <td><a href=\"$url\">$url</a></td>" >> "$HTML_FILE"
    echo "                            <td>$desc</td>" >> "$HTML_FILE"
    echo "                        </tr>" >> "$HTML_FILE"

done < "$CSV_FILE"





# Close tags
cat <<EOF >> "$HTML_FILE"
                    </table>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
EOF

echo "Generated: $HTML_FILE"

